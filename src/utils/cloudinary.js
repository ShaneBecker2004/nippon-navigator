export const cloudinaryUrl = (path, width = 400, height = null) => {
  if (!path) return "/images/default.jpg";

  if (path.startsWith("http")) {
    return path.includes("res.cloudinary.com")
      ? path.replace(
          "/upload/",
          `/upload/w_${width},h_${height || "auto"},c_fill,q_auto,f_auto/`
        )
      : path;
  }

  const CLOUD_NAME = "dnovomqx8";

  const size = height
    ? `w_${width},h_${height},c_fill`
    : `w_${width},c_fill`;

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${size}/q_auto,f_auto/${path}`;
};