import Link from "next/link";

const Linker = ({ href, children, className, ...props }) => {
    return (
        <Link href={href} className={className} {...props} shallow prefetch={false} passHref>
            {children}
        </Link>
    );
};

export default Linker;