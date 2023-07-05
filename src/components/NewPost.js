import { Link, useNavigate } from "react-router-dom"


export default function NewPost() {
	const avatar = process.env.REACT_APP_AVATAR;
	const nav = useNavigate();
	const createPost = (evt) => {
		evt.preventDefault();
		
		const post = {
			id: 0,
			content: evt.target.elements.content.value
		}
		
		fetch("http://localhost:7070/posts", {
			method: "POST",
			body: JSON.stringify(post),
			headers: {
				"Content-type" : "application/json"
			}
		}).then(() => nav("/"))
	};
	
	return (
		<div className="posts_container">
			<div className="new__post_n">
				<Link to="/" className="time__close">&#x2716;</Link>
				<p><b>Создать новую публикацию</b></p>
				<form onSubmit={createPost} className="form__submit">
					<div className="new__content">
						<img className="avatar" src={avatar} alt="img" />
						<input type="text" name="content" placeholder="Введите название публикации"/>	
					</div>
					<button type="submit" className="btn__create-post">Опубликовать</button>
				</form>
			</div>
		</div>
	)
};