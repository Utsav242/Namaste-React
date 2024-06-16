import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const styleCard = {
  backgroundColor: "#e5e7eb",
};
const heading = <h1>Namaste React</h1>;

// Json Mock data

// const restMockData = {

//     "id": "65797",
//     "name": "Leon's - Burgers & Wings (Leon Grill)",
//     "cloudinaryImageId": "r4ufflqojich0r29efvc",
//     "locality": "Koramangala",
//     "areaName": "Koramangala",
//     "costForTwo": "₹300 for two",
//     "cuisines": ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
//     "avgRating": 4.3,
//     "feeDetails": {
//       "restaurantId": "65797",
//       "fees": [
//         {
//           "name": "BASE_TIME"
//         },
//         {
//           "name": "BASE_DISTANCE",
//           "fee": 3300
//         },
//         {
//           "name": "ANCILLARY_SURGE_FEE"
//         }
//       ],
//       "totalFee": 3300
//     },
//     "parentId": "371281",
//     "avgRatingString": "4.3",
//     "totalRatingsString": "10K+",
//     "sla": {
//       "deliveryTime": 19,
//       "lastMileTravel": 1.3,
//       "serviceability": "SERVICEABLE",
//       "slaString": "19 mins",
//       "lastMileTravelString": "1.3 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2023-07-30 04:00:00",
//       "opened": true
//     },
//     "badges": {},
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {},
//         "textBased": {},
//         "textExtendedBadges": {}
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "₹125 OFF",
//       "subHeader": "ABOVE ₹249",
//       "discountTag": "FLAT DEAL"
//     },
//     "orderabilityCommunication": {
//       "title": {},
//       "subTitle": {},
//       "message": {},
//       "customIcon": {}
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//         "lottie": {},
//         "video": {}
//       }
//     },
//     "reviewsSummary": {},
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {}

//   }

const restMockData = [
  {
    id: "65797",
    name: "Leon's - Burgers & Wings (Leon Grill)",
    cloudinaryImageId: "r4ufflqojich0r29efvc",
    locality: "Koramangala",
    areaName: "Koramangala",
    costForTwo: "₹300 for two",
    cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
    avgRating: 4.3,
    feeDetails: {
      restaurantId: "65797",
      fees: [
        {
          name: "BASE_TIME",
        },
        {
          name: "BASE_DISTANCE",
          fee: 3300,
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3300,
    },
    parentId: "371281",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 1.3,
      serviceability: "SERVICEABLE",
      slaString: "19 mins",
      lastMileTravelString: "1.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-07-30 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "55864",
    name: "Pizza Palace",
    cloudinaryImageId: "y7wgfjdsfjgdsklwoiw",
    locality: "Indiranagar",
    areaName: "Indiranagar",
    costForTwo: "₹500 for two",
    cuisines: ["Italian", "Fast Food"],
    avgRating: 4.6,
    feeDetails: {
      restaurantId: "55864",
      fees: [
        {
          name: "BASE_TIME",
        },
        {
          name: "BASE_DISTANCE",
          fee: 2500,
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 2500,
    },
    parentId: "222344",
    avgRatingString: "4.6",
    totalRatingsString: "8K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.5,
      serviceability: "SERVICEABLE",
      slaString: "25 mins",
      lastMileTravelString: "2.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-07-30 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "43982",
    name: "Spice Symphony",
    cloudinaryImageId: "qwdoqjweoiwqowqoiqwe",
    locality: "Whitefield",
    areaName: "Whitefield",
    costForTwo: "₹400 for two",
    cuisines: ["Indian", "Chinese", "Thai"],
    avgRating: 4.4,
    feeDetails: {
      restaurantId: "43982",
      fees: [
        {
          name: "BASE_TIME",
        },
        {
          name: "BASE_DISTANCE",
          fee: 2800,
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 2800,
    },
    parentId: "334455",
    avgRatingString: "4.4",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 3.0,
      serviceability: "SERVICEABLE",
      slaString: "22 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-07-30 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹349",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="food-logo">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
          alt="food logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = ({ restData }) => {
  // Destructring props

  const { costForTwo, name, cuisines, avgRating } = restData;

  return (
    <div className="restroCard" style={styleCard}>
      <div className="foodImg">
        <img
          src="https://b.zmtcdn.com/data/pictures/0/19773840/6a00aa75c0d9da1fefbde2af3eb1e237_o2_featured_v2.jpg"
          alt="foodImg"
        />
      </div>
      <div className="foodDetail">
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <p>{costForTwo}</p>
        <span>{avgRating} Stars</span>
      </div>
    </div>
  );
};

const BodyComp = () => {
  return (
    <div className="body-container">
      <div className="search-Bar">Search</div>

      <div className="restro-container">
        {restMockData.map((restaurant) => (
          <ResturantCard key={restaurant.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <BodyComp />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
