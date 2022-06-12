import { useAppDispatch, useAppSelector } from 'hooks'
import ConfirmModal from 'routes/Modal/ConfirmModal'
import { getRejects, revertReject } from 'states/match'
import { closeModal, getDataId, getIsOpen } from 'states/modal'
import Item from './Item'
import styles from './rejectList.module.scss'

const RejectList = () => {
  const dispatch = useAppDispatch()
  const rejects = useAppSelector(getRejects)
  const dataId = useAppSelector(getDataId)
  const isModalOpen = useAppSelector(getIsOpen)
  const modalMessage = '거절목록에서 제거하시겠습니까?\n제거한 대상은 다시 매칭이 가능합니다.'

  const onConfirm = () => {
    if (!dataId) return
    dispatch(revertReject(dataId))
    dispatch(closeModal())
  }
  const onCancel = () => {
    dispatch(closeModal())
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
