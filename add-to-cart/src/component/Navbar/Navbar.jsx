

const Navbar = () => {
    const routes = [
        { path: '/', id: 1, name: 'Home' },
        { path: '/about', id: 2, name: 'About' },
        { path: '/services', id: 3, name: 'Services' },
        { path: '/contact', id: 4, name: 'Contact' },
        { path: '/dashboard', id: 5, name: 'Dashboard' }
    ];

    return (

        <div>
            <ul className=" md:flex">
                {
                    routes.map(route => <li className="ml-10 font-semibold"
                        key={route.id}>
                        <a href={route.path} > {route.name} </a> </li>)
                }

            </ul>


        </div >
    );
};

export default Navbar;