import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledDiv = styled.div`
  display: flex;
 `
const MyCompany = ({...props}) => (
  <StyledDiv {...props}>
    Test content
  </StyledDiv>
)

MyCompany.propTypes = {
  bla: PropTypes.string,
}

MyCompany.defaultProps = {
  bla: "test",
}

export default MyCompany
