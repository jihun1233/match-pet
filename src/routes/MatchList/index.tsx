import { useAppDispatch, useAppSelector } from 'hooks'
import ConfirmModal from 'routes/Modal/ConfirmModal'
import { getMatches, cancelMatch } from 'states/match'
import { getConfirmModalIsOpen, getConfirmModalDataId, closeConfirmModal } from 'states/modal'

import Item from './Item'
import styles from './matchList.module.scss'

const MatchList = () => {
  const dispatch = useAppDispatch()
  const matches = useAppSelector(getMatches)
  const dataId = useAppSelector(getConfirmModalDataId)
  const isModalOpen = useAppSelector(getConfirmModalIsOpen)
  const modalMessage = '정말로 매치를 취소하시겠습니까?'

  const onConfirm = () => {
    if (!dataId) return
    dispatch(cancelMatch(dataId))
    dispatch(closeConfirmModal())
  }
  const onCancel = () => {
    dispatch(closeConfirmModal())
  }

  return (
    <div>
      <ul className={styles.matchList}>
        {matches.map((match) => (
          <Item match={match} key={`match-item-${match.user.id}`} />
        ))}
      </ul>
      <ConfirmModal isOpen={isModalOpen} message={modalMessage} onConfirm={onConfirm} onCancel={onCancel} />
    </div>
  )
}

export default MatchList
