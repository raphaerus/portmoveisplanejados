import { FiTruck, FiCreditCard, FiHeart } from "react-icons/fi";

export default function FeaturesBanner() {
  return (
    <div className="w-full bg-plantGreen border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          
          {/* Item 1 */}
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <FiTruck className="text-4xl text-white mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Free Delivery</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Free shipping around the world <br/> for all orders over $120
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <FiCreditCard className="text-4xl text-white mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Safe Payment</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                With our payment gateway, <br/> don't worry about your info
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <FiHeart className="text-4xl text-white mt-1 shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Friendly Services</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                You have 30-day return guarantee <br/> for every single order
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}