import CSSPage from '../../Pages/CSS'
import ListsPage from '../../pages/html/lists'
import TablesPage from '../../pages/html/tables'
import TitlesPage from '../../pages/html/titles'
import JavascriptPage from '../../pages/javascript'
import SpanPage from '../../pages/html/paragraphs/span'
import StrikePage from '../../pages/html/paragraphs/strike'
import StrongPage from '../../pages/html/paragraphs/strong'
import ParagraphPage from '../../pages/html/paragraphs/paragraph'
import Paragraphs from '../../pages/html/paragraphs'
import ImagePage from '../../pages/html/image'
import AttributesPage from '../../pages/html/attributes'
import FormPage from '../../pages/html/form'
import AnchorsPage from '../../pages/html/anchors'

export const routesList = [
  {
    path: '/html',
    icon: Html5Outlined,
    label: 'HTML',
    childs: [
      {
        path: 'attributes',
        label: 'Atributos',
        pageComponent: AttributesPage,
      },
      {
        path: 'titles',
        label: 'Titulos',
        pageComponent: TitlesPage,
      },
      {
        path: 'lists',
        label: 'Listas',
        pageComponent: ListsPage,
      },
      {
        path: 'paragraph',
        label: 'Párrafos',
        pageComponent: Paragraphs,
        subChilds: [
          {
            path: 'parrafo',
            label: 'Párrafo',
            pageComponent: ParagraphPage,
          },
          {
            path: 'span',
            label: 'Extendido',
            pageComponent: SpanPage,
          },
          {
            path: 'strong',
            label: 'Negrita',
            pageComponent: StrongPage,
          },
          {
            path: 'strike',
            label: 'Tachado',
            pageComponent: StrikePage,
          },
        ],
      },
      {
        path: 'table',
        label: 'Tabla',
        pageComponent: TablesPage,
      },
      {
        path: 'image',
        label: 'Imagen',
        pageComponent: ImagePage,
      },
      {
        path: 'form',
        label: 'Formularios',
        pageComponent: FormPage,
      },
      {
        path: 'anchors',
        label: 'Enlaces',
        pageComponent: AnchorsPage,
      },
    ],
  },
  {
    path: '/css',
    icon: {
      className: 'fab fa-css3-alt',
      style: {
        fontSize: '18px',
        paddingInline: '2px',
      },
    },
    label: 'CSS',
    pageComponent: CSSPage,
  },
  {
    path: '/javascript',
    icon: {
      className: 'fab fa-js-square',
      style: {
        fontSize: '16px',
        paddingInline: '2px',
      },
    },
    label: 'JavaScript',
    pageComponent: JavascriptPage,
  },
]
