import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout(props) {
  return (
    <div className='h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll'>
        <Navbar />
        {props.children}
        <Footer />
    </div>
  )
}
