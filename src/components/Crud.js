import React from "react";
import { Routes, Route } from "react-router-dom"
import EditPost from "./EditPost";
import ViewPost from "./ViewPost";
import ViewPosts from "./ViewPosts";
import NewPost from "./NewPost";


export default function Crud() {
	return (
		<div className="general">
				<Routes>
					<Route path="/" element={<ViewPosts />} /> 
					<Route path="/posts/new" element={<NewPost />} /> 
					<Route path="/posts/:pId" element={<ViewPost />} /> 
					<Route path="/posts/:pId/edit" element={<EditPost />} /> 
				</Routes>
			
		</div>
	)
};
