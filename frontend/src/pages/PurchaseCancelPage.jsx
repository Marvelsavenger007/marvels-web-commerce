import { XCircle, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PurchaseCancelPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
        <motion.div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <div className="p-6 sm:p-8">
                <div className="flex justify-center">
                    <XCircle className="text-red-400 w-16 h-16 mb-4" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-red-400 mb-2">
                    Purchase Canceled
                </h1>
                <p className="text-gray-300 text-center mb-6">
                    Your purchase has been canceled. {"If"} you have any questions, please contact support.
                </p>
                <div className='bg-gray-700 rounded-lg p-4 mb-6'>
                    <p className='text-sm text-gray-400 text-center'>
                        If you encountered any issues during the checkout process, feel free to reach out to our support team for assistance.
                    </p>
                </div>
                <div className='space-y-4'>
                    <Link
                        to={"/"}
                        className="cursor-pointer w-full bg-gray-600 hover:bg-gray-700 text-red-400 font-bold py-2 px-4
                        rounded-lg transition duration-300 flex items-center justify-center"
                    >
                        <ArrowLeft className="mr-2" size={18} />
                        Return to Shopping
                    </Link>
                </div>
            </div>
        </motion.div>          
    </div>
  )
}

export default PurchaseCancelPage
