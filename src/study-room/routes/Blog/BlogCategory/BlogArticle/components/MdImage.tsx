import { type FC, type ImgHTMLAttributes } from 'react';

interface MdImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  // 他に必要なプロップスがあればここに追加
}

const MdImage: FC<MdImageProps> = (props) => {
  const { src, alt, title, ...rest } = props;

  const containerStyle = {
    textAlign: 'center' as const, // 'center'型をTextAlignに変換
  };

  const imageStyle = {
    width: '80%',
  };

  return (
    <div style={containerStyle}>
      <img src={src} alt={alt} title={title} {...rest} style={imageStyle} />
    </div>
  );
};

export default MdImage;
