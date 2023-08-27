
import { Helmet } from 'react-helmet';
import ProductPurchaseSection from './ProductPurchaseSection';
import Banner from '../Banner/Banner';
import WomenPageNewItems from '../PageNewItems/WomenPageNewItems/WomenPageNewItems';
import DownloadMobile from '../DownloadMobile/DownloadMobile';

const ProductPurchasePage = () => {
    return (
        // not mobile responsive
        <div>
            <Helmet><title>UrbanUtopia | Product Purchase</title></Helmet>
            <Banner></Banner>
            <ProductPurchaseSection></ProductPurchaseSection>
            <WomenPageNewItems></WomenPageNewItems>
            <DownloadMobile></DownloadMobile>
            
        </div>
    );
};

export default ProductPurchasePage;