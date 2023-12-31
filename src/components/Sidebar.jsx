import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "92%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, index) => (
        <button
          className="category-btn"
          key={category.name + index}
          onClick={() => setSelectedCategory(category.name)}
          style={{
            backgroundColor: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
