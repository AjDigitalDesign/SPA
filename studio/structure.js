import S from '@sanity/desk-tool/structure-builder';

import {
    FaCog,
    FaPhone,
    FaHome,
    FaFlag,
    FaGlobeAmericas,
    FaQuoteRight,
    FaAlignLeft,
    FaFileAlt,
    FaClipboardCheck,
    FaMapPin,
    FaNewspaper,
    FaList,
    FaHandsHelping,
    FaThumbsUp,
    FaUsers,
    FaThList
} from 'react-icons/fa';

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Customize')
                .icon(FaCog)
                .child(
                    S.editor()
                        .id('customize')
                        .schemaType('customize')
                        .documentId('customize')
                ),
            S.listItem()
                .title('Pages')
                .icon(FaFileAlt)
                .child(
                    S.list()
                        .title('Pages')
                        .items([
                           S.listItem()
                               .title('Home')
                               .icon(FaHome)
                               .child(
                                   S.editor()
                                       .id('home')
                                       .schemaType('home')
                                       .documentId('global-home')
                               )
                        ])
                )
        ]);

