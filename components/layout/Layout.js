import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout(props) {
  return (
    <div className='min-h-screen flex flex-col'>
        <Navbar />
        <div className="flex-grow">
            {props.children}
        </div>
        <Footer />
    </div>
  )
}
