const Footer = () => {
  return (
    <footer>
      <div className="py-10 px-6 border-t sticky bottom-0">
        <p className="text-cGrey font-semibold text-center">
          &copy; {new Date().getFullYear()} DiaryLog. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
