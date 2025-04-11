import os
import json
from PIL import Image
import trimesh
from io import BytesIO

def collect_files_recursively(directory_path: str):
	"""
	Recursively collects all files and directories within the given directory and its subdirectories,
	and nests the results in a JSON structure.
		
	:param directory_path: The path of the directory to collect files from.
	:return: A nested dictionary representing the directory structure and files.
	"""
	def collect_from_directory(current_path: str):
		""" Helper function to collect files and directories recursively. """
		directory_data = {}
		
		try:
			# Get all files and subdirectories in the current directory
			for root, dirs, files in os.walk(current_path):
				# Skip the current root, it will be processed by the recursive call
				if root == current_path:
					for file in files:
						if(file.lower().endswith(".stl")):
							file_path = os.path.join(root, file)
							directory_data[file] = file_path
					# Add subdirectories recursively
					for subdir in dirs:
						subdir_path = os.path.join(root, subdir)
						directory_data[subdir] = collect_from_directory(subdir_path)
					break
		except Exception as e:
			print(f"Error reading directory {current_path}: \n{e}")

		return directory_data

	# Start collecting from the given directory path
	return {os.path.basename(directory_path): collect_from_directory(directory_path)}

def collect_stl_files_recursively(current_path: str, target_base_path: str):
	""" Helper function to collect files and directories recursively. """

	try:
		# Traverse the directory recursively using os.walk
		for root, dirs, files in os.walk(current_path):
			# Ensure the relative path from the base path is preserved
			print("Root: " + root)
			relative_path = os.path.relpath(root, current_path)
			target_directory_path = os.path.join(target_base_path, relative_path)
			print("Target Directory Path: " + target_directory_path)

			# Create the directory structure in the 'resources' directory
			os.makedirs(target_directory_path, exist_ok=True)

			# Process each file in the current directory
			for file in files:
				lowerFile = file.lower()
				file_path = os.path.join(root, file)
				target_file_path = os.path.join(target_directory_path, lowerFile.replace("stl", "png"))

				# Only process .stl files (case-insensitive)
				if lowerFile.endswith(".stl"):
					print("\tFile: " + file + " - Is STL file")

					# Here you would call your stl_to_png function
					# For now, let's simulate it with a print statement
					try:
						stl_to_png(file_path, target_file_path)
					except:
						print("ERROR: Failed to convert " + file_path + " to PNG")

					# Store the file data in the dictionary (for tracking)
					print("Successfully converted " + file + " to PNG and stored at " + target_file_path)
					print("\n")
				else:
					print("\tFile: " + file + " - Skipping, is not STL file")
					print("\n")

			# Process directories recursively (subdirectories)
			for subdir in dirs:
				subdir_path = os.path.join(current_path, subdir)
				print("Subdirectory: " + subdir + " - Path: " + subdir_path)
				collect_stl_files_recursively(subdir_path, target_base_path)
				print("Subdirectory: " + subdir + " - Stepping out of path: " + subdir_path)

	except Exception as e:
		print(f"Error reading directory: " + current_path + "\n" + e)

def save_files_to_json(file_data: dict, output_file: str):
	"""
	Saves the collected file data to a JSON file.
		
	:param file_data: The dictionary containing file data.
	:param output_file: The path to the output JSON file.
	"""
	try:
		with open(output_file, 'w') as json_file:
			json.dump(file_data, json_file, indent=4)
		print(f"File data has been saved to " + output_file)
	except Exception as e:
		print(f"Error saving to JSON file: \n" + e)

# Load the STL file using trimesh
def stl_to_png(stl_file_path, png_file_path):
	print("STL to PNG:")
	print("\tSTL File Path: " + stl_file_path + " - PNG File Path: " + png_file_path)
	# Load the \tSTL file
	mesh = trimesh.load_mesh(stl_file_path)
	print("\tSTL to PNG - Mesh loaded")

	# Create an offscreen rendering of the 3D model
	scene = mesh.scene()
	print("\tSTL to PNG - Scene created")
	image = scene.save_image(resolution=[512, 512], visible=True)
	print("\tSTL to PNG - Image saved to var")

	# Convert the raw image into a format that PIL can use
	image_bytes = BytesIO(image)  # Convert to byte stream
	print("\tSTL to PNG - Image cast to bytes")
	img = Image.open(image_bytes)  # Open as an image using PIL
	print("\tSTL to PNG - Opened image")
		
	# Save the image as PNG
	img.save(png_file_path)
	print(f"\tSTL to PNG - Image saved to path: " + png_file_path)


# Example usage
if __name__ == "__main__":
	# New Paths
	base_path = "test-directory"
	resources_path = "stl-collection-viewer/src/assets/test-directory"
	output_json_file = "stl-collection-viewer/src/assets/resources.json"
		
	# Create the 'resources' directory if it doesn't exist
	os.makedirs(resources_path, exist_ok=True)

	# Collect file data from the base directory and its subdirectories
	file_data = collect_files_recursively(base_path)

	# Save the collected file data to a JSON file
	save_files_to_json(file_data, output_json_file)

	collect_stl_files_recursively(base_path, resources_path)

	print("\n=============")
	print("= All done! =")
	print("=============")

	# stl_to_png("dragon.stl", "dragon.png")
