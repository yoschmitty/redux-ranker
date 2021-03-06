import React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import { Button } from "./Buttons";
import { StyledBaseDiv, StyledContentDiv } from "./Divs";
import { StyledImg } from "./Imgs";
import { StyledTitle } from "./Text";

import styled from "styled-components";

const StyledBottomDivLeftButton = styled.div`
  display: grid;
  grid-column: 1;
  grid-row: 2;
`;

const StyledBottomDivRightButton = styled.div`
  display: grid;
  grid-column: 2;
  grid-row: 2;
`;

const ItemGridCard = ({
  id,
  title,
  backImg,
  releaseYear,
  overview,
  addItem,
  deleteItem,
}) => {
  //const movieYear = releaseYear.slice(0, 4);

  //adding ellipsesis for multiple line overviews

  const newOverview = overview.slice(0, 125);
  //console.log(newOverview);
  const newOverviewIndex = newOverview.lastIndexOf(" ");
  const resliceOverview = newOverview.slice(0, newOverviewIndex);
  const finalOverview = resliceOverview.concat("...");

  //adding Ellipsis for multiple line titles

  const newTitle = title.slice(0, 45);
  //console.log(newOverview);
  const newTitleIndex = newTitle.lastIndexOf(" ");
  const resliceTitle = newTitle.slice(0, newOverviewIndex);
  const ellipsisTitle = resliceTitle.concat("...");

  //console.log(finalOverview);
  //const newText = overview.find(" ")

  /* removed for now can add back in on backside of card or when i want to add in more sizes/showing txt only on desktop
  <StyledOverview>{finalOverview}</StyledOverview> */
  const renderItemCard = () => {
    if (title.length >= 45) {
      return (
        <StyledBaseDiv name="BaseDiv">
          <StyledImg
            src={"https://image.tmdb.org/t/p/w500" + backImg}
            title={title}
            alt="movie image"
          />
          <StyledContentDiv>
            <StyledTitle>{ellipsisTitle}</StyledTitle>
            <StyledBottomDivLeftButton>
              <Button add onClick={(e) => addItem(id, title, backImg)}>
                Add
              </Button>
            </StyledBottomDivLeftButton>
            <StyledBottomDivRightButton>
              <Button details onClick={() => console.log("give me more deats")}>
                Details
              </Button>
            </StyledBottomDivRightButton>
          </StyledContentDiv>
        </StyledBaseDiv>
      );
    } else {
      return (
        <StyledBaseDiv name="BaseDiv">
          <StyledImg
            src={"https://image.tmdb.org/t/p/w500" + backImg}
            title={title}
            alt="movie image"
          />
          <StyledContentDiv>
            <StyledTitle>{title}</StyledTitle>
            <StyledBottomDivLeftButton>
              <Button add onClick={(e) => addItem(id, title, backImg)}>
                Add
              </Button>
            </StyledBottomDivLeftButton>
            <StyledBottomDivRightButton>
              <Button details onClick={() => console.log("give me more deats")}>
                Details
              </Button>
            </StyledBottomDivRightButton>
          </StyledContentDiv>
        </StyledBaseDiv>
      );
    }
  };
  return <div>{renderItemCard()}</div>;
};

export default ItemGridCard;
