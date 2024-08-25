import Container from '../Components/ContainerWrapper'
import CardWrapper from '../Components/CardWrapper'
import QrCodeImage from '../Components/QrCode'
import Title from '../Components/Title'
import Subtitle from '../Components/Subtitle'
import QrCode from '../assets/image-qr-code.png'

function Home() {
  return (
    <Container>
      <CardWrapper>
        <QrCodeImage src={QrCode}></QrCodeImage>
      <Title>Improve your front-end skills by building projects</Title>
      <Subtitle>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
      </Subtitle>
      </CardWrapper>
    </Container>
  )
}

export default Home