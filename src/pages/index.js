import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This here is Home. Welcome to my homepage!</p>
      <StaticImage src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5d2f751b-0791-4cb6-a646-8cfecd441a73/dfmcmul-0b06c588-93cd-4be9-a49a-03a8361f18b2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVkMmY3NTFiLTA3OTEtNGNiNi1hNjQ2LThjZmVjZDQ0MWE3M1wvZGZtY211bC0wYjA2YzU4OC05M2NkLTRiZTktYTQ5YS0wM2E4MzYxZjE4YjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J0oDOrrcD4mg5j3s728M_6Mgr6Y8dUg6OATIwTama5s" alt=""/>
    </Layout>
  )
}

export default IndexPage