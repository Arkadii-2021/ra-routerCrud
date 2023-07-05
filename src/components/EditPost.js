import { Link, useNavigate, useParams } from "react-router-dom"


export default function EditPost() {
	const avatar = process.env.REACT_APP_AVATAR;
	const {pId} = useParams();
	const nav = useNavigate();
	
	const editThisPost = (evt) => {
		evt.preventDefault();
		
		const post = {
			id: +pId,
			content: evt.target.elements.content.value
		}

		fetch(`http://localhost:7070/posts/${pId}`, {
			method: "PUT",
			body: JSON.stringify(post),
			headers: {
				'Content-type' : 'application/json'
			}
		})
		.then(() => nav(`/posts/${pId}`))
	};
	
	return (
		<div className="posts_container">
			<div className="new__post_n">
				<Link to="/" className="time__close">&#x2716;</Link>
				<p><b>Редактировать публикацию</b></p>
				<form onSubmit={editThisPost} className="form__submit">
					<div className="new__content">
						<img className="avatar" src={avatar} alt="img" />
						<input type="text" name="content" placeholder="Введите название публикации"/>	
					</div>
					<button type="submit" className="btn__create-post">Сохранить</button>
				</form>
			</div>
		</div>
	)
}
