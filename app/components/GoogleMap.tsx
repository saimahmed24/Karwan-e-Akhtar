// components/GoogleMap.tsx

interface GoogleMapProps {
    officeLocation: string;  // This is where you pass the embed link as a prop
  }
  
  const GoogleMap: React.FC<GoogleMapProps> = ({ officeLocation }) => {
    return (
      <div className="w-full h-screen  pt-[93.81px] bg-gray-200">
        <iframe
          src={officeLocation}  // The embed link goes here
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    );
  };
  
  export default GoogleMap;
  