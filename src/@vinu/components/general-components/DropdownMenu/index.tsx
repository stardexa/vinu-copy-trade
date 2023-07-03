import React, {PropsWithChildren} from "react";
import Link from "../Link/Link";
import {CircleFlag} from "react-circle-flags";
import {useRouter} from "next/router";
import LSKeys from "../../../interfaces/localStorageKeys";
import {locales} from "../../../config/layout";


interface Props extends PropsWithChildren {
    open: boolean
}

const DropdownMenu = (props: Props) => {
    const {pathname, query} = useRouter()

    const handleLanguageChange = (lang: { text: string, value: string }) => {
        localStorage.setItem(LSKeys.language, JSON.stringify(lang))
    }

    return (
        <div className='dropdown'>
            {locales.map((locale) => (
                <Link
                    className='dropdown-item'
                    key={locale.value}
                    href={{pathname, query}}
                    locale={locale.value}
                    onClick={() => handleLanguageChange(locale)}
                >
                    <CircleFlag
                        countryCode={
                            locale.value === 'en'
                                ? 'us'
                                : locale.value === 'ko'
                                    ? 'kr'
                                    : locale.value!
                        }
                        height='30'
                        width='30'
                        style={{marginRight: '15px'}}
                    />
                    {locale.text}
                </Link>
            ))}
        </div>
    )
};

export default DropdownMenu