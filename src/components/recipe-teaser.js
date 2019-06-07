import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"


const RecipeTeaser = ({recipeTitle, recipeDate, recipeSummary, recipeSlug, recipeImg}) => (
  <div>
    <Link to={recipeSlug}>
      <Img fixed={recipeImg} />
      <h2>{recipeTitle}</h2>
    </Link>
    <p>{recipeDate}</p>
    <p>{recipeSummary}</p>
  </div>
)

export default RecipeTeaser

