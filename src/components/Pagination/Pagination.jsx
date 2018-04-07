// @flow
import React from "react";
import { PaginationWrapper, PaginationBtn } from "./PaginationStyled";

// Declare flow typed for Props
type Props = {
  page?: boolean,
  updateGlobalState: Function, // we get updateGlobalState from parent component
  maxPages: number
};

// Names we're using for our buttons
const nextButtonValue = "Next";
const previousButtonValue = "Previous";

const Pagination = ({ page, updateGlobalState, maxPages }: Props) => (
  <PaginationWrapper>
    <PaginationBtn
      disableStyle={page <= 0}
      page={page}
      onClick={Pagination.onClick(updateGlobalState, page)}
    >
      Previous
    </PaginationBtn>
    <span className="current-page">Page: {page + 1}</span>
    <PaginationBtn
      disableStyle={page >= maxPages}
      page={page}
      onClick={Pagination.onClick(updateGlobalState, page, maxPages)}
    >
      Next
    </PaginationBtn>
  </PaginationWrapper>
);

Pagination.onClick = (updateGlobalState, page, maxPages) => (
  event: SyntheticMouseEvent<HTMLButtonElement>
) => {
  event.preventDefault();
  // when page change take scroll to top
  window.scroll(null, 0);
  // Get the button name
  const btnName = event.currentTarget.textContent.toLowerCase();

  // if btnName is equal tot the nextButton value add a page until find the last page
  if (btnName === nextButtonValue.toLowerCase()) {
    // just add a new page if it is minor than maxPage
    const nextPage = page + 1;
    if (page !== maxPages) {
      updateGlobalState(nextPage);
    }
  } else if (btnName === previousButtonValue.toLowerCase()) {
    // Remove a page until it find the first page
    const previousPage = page - 1;
    if (page > 0) {
      updateGlobalState(previousPage);
    }
  }
};

Pagination.defaultProps = {
  page: false
};

export default Pagination;
