import useBillboard from "@/hooks/useBillboard";

const Billboard = () => {
  const {data} = useBillboard() 
  return ( 
    <div className="relative h-[56.25vw]">
      <video 
        className="w-full h-[56.25vw] object-cover"
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
      >
      </video>
      Billboard
    </div>
   );
}
 
export default Billboard;