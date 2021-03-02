import React from "react";
import makeStyles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputColor from "react-input-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ color, setColor, setLineWidth }) {
  const classes = makeStyles();
  const handleEraser = () => {
    setLineWidth(20);
    setColor({
      hex: "#E6E6E6",
    });
  };

  const handleInputColorChange = (inputColor) => {
    setLineWidth(3);
    setColor(inputColor);
  };
  console.log(color);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            CollabOn
          </Typography>
          <div className={`${classes.smMargin} ${classes.flexBox}`}>
            <div className={classes.smMargin}>
              <IconButton edge="start" color="inherit" onClick={handleEraser}>
                <FontAwesomeIcon icon={faEraser} />
              </IconButton>
            </div>
            <div className={classes.smMargin}>
              <InputColor
                initialValue="#000"
                onChange={handleInputColorChange}
                placement="right"
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
