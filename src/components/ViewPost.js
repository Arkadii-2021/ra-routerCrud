import { Link, useNavigate, useParams } from "react-router-dom"
import {useState, useEffect} from 'react';
import getPosts from "./getPosts";

const dayjs = require('dayjs');
let relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);


export default function ViewPost() {
	const [posts, setPosts] = useState();
	const avatar = process.env.REACT_APP_AVATAR;
	const nav = useNavigate();	
	const { pId } = useParams();
	
	useEffect(() => {
		getPosts(`http://localhost:7070/posts/${pId}`)
		.then(res => setPosts(res))
	}, [])
	
	if (!posts) 
		return (
		<p>Пожалуйста, подождите...</p>
	)

	return (
		<div className="posts_container">
			<div className="card__base" style={{margin: "7px"}}>
				<div className="post__card">
				<Link to="/" className="time__close_edit">&#x2716;</Link>
				<img className="avatar" src={avatar} alt="img" />
					<div className="user__post">
						<div><b>Arkadii Kozhuhow</b></div>
						<div>&#x263C;<b> Основатель группы</b> - {dayjs().to(dayjs(posts.post.created))}</div>
					</div>
				</div>
					<span><p>{posts.post.content}</p></span>
					<div className="new__content" style={{justifyContent: "space-around"}}>
							<span style={{fontSize: "14px", opacity: "0.8"}}>&#x1F44D; Нравится</span><span style={{fontSize: "14px", opacity: "0.8"}}>&#x270D; Комментировать</span>
					</div>
					<div className="post__card">
						<button type="submit" className="btn__edit-post" onClick={() => nav(`/posts/${pId}/edit`)}>Редактировать</button>
						<button type="submit" className="btn__delete-post" onClick={() => {fetch(`http://localhost:7070/posts/${pId}`, {method: "DELETE",}).then(() => nav("/"))}}>Удалить</button>
					</div>
			</div>	
		</div>
	)
}
