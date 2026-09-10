function Header() {
    return (
      <header className="header">
            <div className="header-container">

                <h1>Employee Management System</h1>

                <nav>
                    <a href="/">Home</a>
                    <a href="/employees">Employees</a>
                    <a href="/add-employee">Add Employee</a>
                </nav>

            </div>
        </header>
    );
}

export default Header;