const cloudinary = require("cloudinary").v2;

const deleteFile = async (imgUrl) => {
  try {
    const imgSplited = imgUrl.split("/");
    const folderName = imgSplited.at(-2);
    const fieldName = imgSplited.at(-1).split(".");
    const public_id = `${folderName}/${fieldName[0]}`;

    const result = await cloudinary.uploader.destroy(public_id);
    if (result.result === "ok") {
      console.log("Imagen eliminada exitosamente");
    } else {
      console.log("Error eliminando la imagen:", result);
    }
  } catch (error) {
    console.error("Error eliminando la imagen:", error);
  }
};

module.exports = { deleteFile };
