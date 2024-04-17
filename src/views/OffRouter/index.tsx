import { Typography, Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

const { Title } = Typography;

function OffRouter() {
  return (
    <Result
      status="404"
      title="Oops! Page Not Found"
      subTitle="您要找的页面不存在或者已被移动"
      extra={
        <Button type="primary" icon={<HomeOutlined />} onClick={() => window.location.href='/'} size="large">
          Back to Home
        </Button>
      }
      style={{ marginTop: '80px' }}
    >
      <Title level={4} style={{ textAlign: 'center', marginTop: '24px' }}>
        Alternatively, you can try:
      </Title>

      <ul style={{ textAlign: 'left', margin: '24px 0', paddingLeft: '24px' }}>
        <li>
          <Link to="/layout/home">返回首页</Link>
        </li>
 
        <li>
        使用上方的搜索栏或通过站点菜单进行导航
        </li>
      </ul>
      
    </Result>
  );
}

export default OffRouter;