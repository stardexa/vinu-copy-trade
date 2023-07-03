import * as React from 'react'
import clsx from 'clsx'
import {useRouter} from 'next/router'
import NextLink, {LinkProps as NextLinkProps} from 'next/link'
import {domain} from '../../../config/main'

// Add support for the sx prop for consistency with the other branches.

interface NextLinkComposedProps
    extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
        Omit<NextLinkProps, 'href' | 'as' | 'passHref' | 'onMouseEnter' | 'onClick' | 'onTouchStart'> {
    to: NextLinkProps['href'];
    linkAs?: NextLinkProps['as'];
}

export const NextLinkComposed = React.forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
    function NextLinkComposed(props, ref) {
        const {
            to,
            linkAs,
            replace,
            scroll,
            shallow,
            prefetch,
            legacyBehavior = true,
            locale,
            ...other
        } = props

        return (
            <NextLink
                href={to}
                prefetch={prefetch}
                as={linkAs}
                replace={replace}
                scroll={scroll}
                shallow={shallow}
                passHref
                locale={locale}
                legacyBehavior={legacyBehavior}
            >
                <a ref={ref} {...other} />
            </NextLink>
        )
    },
)

export type LinkProps = {
    activeClassName?: string;
    as?: NextLinkProps['as'];
    href: NextLinkProps['href'];
    linkAs?: NextLinkProps['as']; // Useful when the as prop is shallow by styled().
    noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'>;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
    const {
        activeClassName = 'active',
        as,
        className: classNameProps,
        href,
        legacyBehavior,
        linkAs: linkAsProp,
        locale,
        noLinkStyle,
        prefetch,
        replace,
        role, // Link don't have roles.
        scroll,
        shallow,
        ...other
    } = props

    const router = useRouter()
    const pathname = typeof href === 'string' ? href : href.pathname
    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    })

    const isExternal =
        typeof href === 'string' && (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0)

    if (isExternal) {
        return <a
            rel={href.includes(domain.default) ? undefined : 'nofollow'}
            className={className} href={href} ref={ref} {...other} />
    }

    const linkAs = linkAsProp || as
    const nextjsProps = {
        to: href,
        linkAs,
        replace,
        scroll,
        shallow,
        prefetch,
        legacyBehavior,
        locale,
    }


    return (
        <NextLinkComposed
            style={{textDecoration: "none"}}
            className={className}
            ref={ref}
            {...nextjsProps}
            {...other} />
    )

})

export default Link
