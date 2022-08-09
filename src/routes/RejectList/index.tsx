import { useAppDispatch, useAppSelector } from 'hooks'
import ConfirmModal from 'routes/Modal/ConfirmModal'
import { getRejects, revertReject } from 'states/match'
import { closeConfirmModal, getConfirmModalDataId, getConfirmModalIsOpen } from 'states/modal'
import Item from './Item'
import styles from './rejectList.module.scss'

const RejectList = () => {
  const dispatch = useAppDispatch()
  const rejects = useAppSelector(getRejects)
  const dataId = useAppSelector(getConfirmModalDataId)
  const isModalOpen = useAppSelector(getConfirmModalIsOpen)
  const modalMessage = '거절목록에서 제거하시겠습니까?\n제거한 대상은 다시 매칭이 가능합니다.'

  const onConfirm = () => {
    if (!dataId) return
    dispatch(revertReject(dataId))
    dispatch(closeConfirmModal())
  }
  const onCancel = () => {
    dispatch(closeConfirmModal())
  }

  return (
    <div>
      <ul className={styles.rejectList}>
        {rejects.map((user) => (
          <Item user={user} key={`reject-item-${user.id}`} />
        ))}
      </ul>
      <ConfirmModal isOpen={isModalOpen} message={modalMessage} onConfirm={onConfirm} onCancel={onCancel} />
    </div>
  )
}

export default RejectList
