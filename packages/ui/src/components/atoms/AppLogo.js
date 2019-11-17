import React from 'react'
import { ResponsiveContext, Box, Heading } from 'grommet'

const logo = (
    <svg width="32px" height="32px" viewBox="0 0 48 48">
        <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="tattle_monogram_primary" fill-rule="nonzero">
                <g id="XMLID_623_">
                    <path d="M47.0460731,23.9633852 C47.0460731,10.7820587 36.5376573,0.0772239328 23.5981901,0.0772239328 C10.5803018,0.0772239328 0.0718859292,10.7820587 0.0718859292,23.9633852 C0.0718859292,36.9050512 10.1881967,47.4501123 22.8139799,47.8495465 L22.8139799,33.8693517 L25.5587153,33.8693517 L25.5587153,47.8495465 C37.5571305,46.8110177 47.0460731,36.5056171 47.0460731,23.9633852 Z" id="XMLID_624_" fill="#020637"></path>
                    <path d="M22.8139799,33.8693517 L22.8139799,47.9294333 C23.049243,47.9294333 23.2845059,47.9294333 23.519769,47.9294333 C24.2255581,47.9294333 24.8529262,47.9294333 25.4802944,47.8495465 L25.4802944,33.8693517 L22.8139799,33.8693517 Z" id="XMLID_626_" fill="#FFFFFF"></path>
                </g>
                <g id="XMLID_617_" transform="translate(14.245284, 10.107531)" fill="#FFFFFF">
                    <path d="M18.0413143,18.570807 C17.416507,18.570807 16.8698004,18.019683 16.8698004,17.389827 L16.8698004,9.75282298 C16.8698004,5.73749093 13.5895615,2.43074692 9.60641414,2.43074692 C5.6232668,2.43074692 2.34302784,5.73749093 2.34302784,9.75282298 L2.34302784,17.389827 C2.34302784,18.019683 1.79632134,18.570807 1.17151392,18.570807 C0.546706495,18.570807 0,18.019683 0,17.389827 L0,9.75282298 C0,4.39904693 4.29555103,0.068786906 9.60641414,0.068786906 C14.9172772,0.068786906 19.2128283,4.39904693 19.2128283,9.75282298 L19.2128283,17.389827 C19.2128283,18.019683 18.7442227,18.570807 18.0413143,18.570807 Z" id="XMLID_45_"></path>
                </g>
                <g id="XMLID_616_" transform="translate(19.126592, 19.808971)" fill="#FFFFFF">
                    <path d="M3.52956116,7.47705377 C3.22917298,7.47705377 2.9287848,7.39749301 2.70349366,7.15881073 L0.37548523,4.69242722 C-0.0750970461,4.21506268 -0.0750970461,3.49901585 0.37548523,3.0216513 C0.826067506,2.54428675 1.50194092,2.54428675 1.9525232,3.0216513 L3.52956116,4.69242722 L7.58480165,0.396146276 C8.0353839,-0.0812182741 8.71125731,-0.0812182741 9.16183964,0.396146276 C9.61242188,0.873510822 9.61242188,1.58955765 9.16183964,2.0669222 L4.28053163,7.23837149 C4.13033753,7.39749301 3.82994935,7.47705377 3.52956116,7.47705377 Z" id="XMLID_44_"></path>
                </g>
                <g id="XMLID_537_" transform="translate(4.881308, 20.215063)" fill="#FFFFFF">
                    <path d="M18.638461,14.4303325 C8.08873415,14.4303325 0.0772873769,10.8972067 0.0772873769,6.18637239 C0.0772873769,3.9094691 1.9809975,1.78959363 5.39181145,0.297829417 C5.55045396,0.219315511 5.62977522,0.219315511 5.78841773,0.140801605 C6.42298777,-0.0947401137 7.05755781,0.140801605 7.37484283,0.768912853 C7.6128066,1.39702411 7.37484283,2.02513536 6.74027278,2.33919098 L6.42298777,2.49621879 C3.96402887,3.59541348 2.53624628,4.93014989 2.53624628,6.18637239 C2.53624628,8.93435907 9.11991043,12.0749153 18.638461,12.0749153 C28.1570116,12.0749153 34.819997,8.93435907 34.819997,6.18637239 C34.819997,4.93014989 33.3922145,3.59541348 30.9332555,2.49621879 C30.2986855,2.26067708 30.0607217,1.55405191 30.2986855,0.92594067 C30.5366492,0.297829417 31.2505406,0.0622876987 31.8851106,0.297829417 C35.2959246,1.78959363 37.1996347,3.9094691 37.1996347,6.18637239 C37.1996347,10.8972067 29.2675092,14.4303325 18.638461,14.4303325 Z" id="XMLID_43_"></path>
                </g>
            </g>
        </g>
    </svg>
)

/**
* @author denny
* @function Logo
**/

const AppLogo = () => {
    return (
        <ResponsiveContext.Consumer>
        {(size) => (
            <Box direction={'row'} align={'center'} gap={'small'}>
                {logo}
                { size!='small' && <Heading level={3}> Archive </Heading>}
            </Box>
        )}
        </ResponsiveContext.Consumer>
    )
}

export default AppLogo