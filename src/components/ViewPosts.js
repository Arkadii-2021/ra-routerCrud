import { Link, useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react';
import getPosts from "./getPosts";

const dayjs = require('dayjs');
let relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);


export default function ViewPosts() {
	const [posts, setPosts] = useState();
	
	const avatar = process.env.REACT_APP_AVATAR;
	const nav = useNavigate();
	
	useEffect(() => {
		getPosts("http://localhost:7070/posts")
		.then(res => setPosts(res))
	}, [])	

	return (
		<div className="posts_container">
		<div className="new__post">
			<Link to="/posts/new" className="create__post">Создать пост</Link>
		</div>
			{posts ? posts.map((post) => {
				return (
				<div className="card__base" key={post.id} onClick={() => nav(`/posts/${post.id}`)}>
				<div className="post__card">
				<img className="avatar" src={avatar} alt="img" />
					<div className="user__post">
						<div><b>Arkadii Kozhuhow</b></div>
						<div>&#x263C;<b> Основатель группы</b> - {dayjs().to(dayjs(post.created))}</div>
					</div>
				</div>
					<span><p>{post.content}</p></span>
					<div className="new__content" style={{justifyContent: "space-around"}}>
							<span style={{fontSize: "14px", opacity: "0.8"}}>&#x1F44D; Нравится</span><span style={{fontSize: "14px", opacity: "0.8"}}>&#x270D; Комментировать</span>
					</div>
					<div className="post__card">
						<img className="avatar" src={avatar} alt="img" />
						<input type="text" name="comment" className="comment" placeholder="Напишите комментарий"></input>
					</div>
				</div>
				)
			}) : null}
		</div>
	)
};
