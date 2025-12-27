import type { Schema, Struct } from '@strapi/strapi';

export interface GameHanziMeta extends Struct.ComponentSchema {
  collectionName: 'components_game_hanzi_metas';
  info: {
    displayName: 'Hanzi Meta';
  };
  attributes: {
    character: Schema.Attribute.String & Schema.Attribute.Required;
    pinyin: Schema.Attribute.String;
    radical: Schema.Attribute.String;
    stroke_data_json: Schema.Attribute.JSON;
  };
}

export interface GameInteractiveMedia extends Struct.ComponentSchema {
  collectionName: 'components_game_interactive_medias';
  info: {
    displayName: 'Interactive Media';
  };
  attributes: {
    ambient_sound: Schema.Attribute.Media<'files' | 'audios'>;
    main_image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    pronunciation_audio: Schema.Attribute.Media<'files' | 'audios'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'game.hanzi-meta': GameHanziMeta;
      'game.interactive-media': GameInteractiveMedia;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
