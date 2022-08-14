import styles from './previewCard.module.scss'

interface IProps {
  src: string
  alt: string
}

const PreviewCard = ({ src = 'https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_150.jpg', alt }: IProps) => {
  return (
    <div className={styles.previewCard}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default PreviewCard
