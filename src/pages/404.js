import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const pageNotFound = () => (
	<Layout>
		<h2>You seem lost.</h2>
		<p>What you're looking for is not here.</p>
		<Link to="/">Go Home</Link>
		<br />
	</Layout>
)

export default pageNotFound;