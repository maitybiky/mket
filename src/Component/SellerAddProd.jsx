import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CollectionsIcon from "@mui/icons-material/Collections";
import { useNavigate } from "react-router";

export default function SellerAddProd() {
  const navi = useNavigate();
  const actions = [
    {
      icon: (
        <CameraAltIcon
          onClick={() => {
            handleCameraClick();
          }}
        />
      ),
      name: "Camera",
    },
    {
      icon: <CollectionsIcon onClick={() => handleGalleryClick()} />,
      name: "Gallery",
    },
  ];

  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleFileInputChange = (event) => {

    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        alert(reader.result)
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryClick = () => {
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = "image/*";
    inputElement.onchange = handleFileInputChange;
    inputElement.click();
  };

  const handleCameraClick = () => {
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = "image/*";
    inputElement.capture = "environment";
    inputElement.onchange = handleFileInputChange;
    inputElement.click();
  };
  return (
    <Box sx={{ height: 30, transform: "translateZ(0px)", flexGrow: 1 }}>
      {selectedImage ? <img src="" alt="" /> : null}
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
