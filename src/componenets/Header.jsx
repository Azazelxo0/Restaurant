import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRestaurant } from '../Redux/restaurantSlice';

export default function Header() {
  const dispatch = useDispatch();
  return (
    <>

      <Navbar variant='dark' className='mt-3' >
      <div className='d-flex justify-content-evenly align-items-center'>

        <Container>
            <Link to={'/'} style={{ textDecoration: "none", overflowY: "hidden" }}>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="https://cdn-icons-png.freepik.com/512/8280/8280802.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top me-2"
                />{' '}
                FOOD <span className='text-warning'>CIRCLE</span>
              </Navbar.Brand>
            </Link>
        </Container>
        <input onChange={(e)=>dispatch(searchRestaurant(e.target.value))} type="text" className='form-control ms-5 w-100 h-100' placeholder='Search by Neighborhood' />
        </div>

      </Navbar >

    </>
  )
}
