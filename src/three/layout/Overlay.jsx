import styles from './overlay.module.css'
import { Container, TopLeft } from './styles.jsx'
import FlyoutMenu from "../../components/FlyoutMenu.jsx";


export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1 className={`text-white ${styles.title}`}>
          BANANA ICE
        </h1>
      </TopLeft>
        <FlyoutMenu/>
    </Container>
  )
}
