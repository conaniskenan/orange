import React, { useRef, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { EditWrapper, Name, Head, Introduce, Submit } from './style'
import { userUpdate, userUpdateHead } from '@/api/users'
const Edit = props => {
	const userRef = useRef(null)
	const introduceRef = useRef(null)
	const [head, setHead] = useState('')
	const { ownInformation } = useSelector(
		state => ({
			ownInformation: state.getIn(['user', 'ownInformation'])?.toJS(),
		}),
		shallowEqual
	)
	const handleUpdate = () => {
		userUpdate({
			name:
				userRef.current.value === ''
					? ownInformation.info?.name
					: userRef.current.value,
			head: head,
			introduce:
				introduceRef.current.value === ''
					? ownInformation.info?.introduce
					: introduceRef.current.value,
		})
		props.history.go(0)
	}
	const handleImg = e => {
		console.log(e.target.files[0])
		const formData = new FormData()
		formData.append('file', e.target.files[0])
		userUpdateHead(formData).then(res => {
			setHead(res.msg)
		})
	}
	return (
		<EditWrapper>
			<Name>
				用户名
				<input
					placeholder={ownInformation.info?.name}
					ref={userRef}
				/>
			</Name>

			<Head>
				头像
				<input
					type='file'
					accept='image/*'
					onChange={e => {
						handleImg(e)
					}}
				/>
			</Head>
			<Introduce>
				个人介绍
				<textarea
					placeholder={ownInformation.info?.introduce}
					ref={introduceRef}
				/>
			</Introduce>
			<Submit onClick={handleUpdate}>确认修改</Submit>
		</EditWrapper>
	)
}

export default Edit
