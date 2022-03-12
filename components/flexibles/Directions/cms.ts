import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Directions',
  name: 'directions',
  widget: 'object',
  summary: 'Directions',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Text',
      name: 'text',
      widget: 'markdown',
      required: true,
      buttons: [
        'bold',
        'italic',
        'link',
        'heading-two',
        'heading-three',
        'heading-four',
        'heading-five',
        'heading-six',
        'bulleted-list',
        'numbered-list',
      ],
      editor_components: [],
      modes: ['rich_text'],
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'directions',
    },
  ],
}
