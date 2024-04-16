

const Footer = () => {
    return (
        <div>
            <p style={
                {
                    textAlign: 'center',
                    color: 'gray',
                }
            }>
                Copyright {new Date().getFullYear()}
            </p>
        </div>
    );
};

export default Footer;