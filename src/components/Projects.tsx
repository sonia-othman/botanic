'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../lib/supabaseClient'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, ArrowLeft, Grid3x3, Rows3, MapPin, Bed, Bath, Maximize2, Filter, SlidersHorizontal, X } from 'lucide-react'
import Link from 'next/link'

interface Property {
  id: number
  name: string
  location: string
  price: number
  image_base64?: string
  created_at: string
  beds?: number
  baths?: number
  sqft?: number
}

const ProjectsPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchQueryFromUrl = searchParams.get('search') || ''

  const [searchQuery, setSearchQuery] = useState(searchQueryFromUrl)
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProperties = useMemo(() => {
    if (!searchQuery.trim()) return properties

    const query = searchQuery.toLowerCase().trim()
    return properties.filter((property) => {
      const nameMatch = property.name.toLowerCase().includes(query)
      const locationMatch = property.location.toLowerCase().includes(query)
      const priceMatch = property.price.toString().includes(query)
      return nameMatch || locationMatch || priceMatch
    })
  }, [searchQuery, properties])

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('properties')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        setProperties((data as Property[]) || [])
      } catch (err) {
        console.error('Error fetching properties:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    const url = `/projects${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ''}`
    router.push(url, { scroll: false })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading properties...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="max-w-3xl mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Discover Your Dream Property
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/80"
            >
              Explore our curated collection of premium properties
            </motion.p>
          </div>

          {/* Search Bar */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSearch} 
            className="max-w-3xl"
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, location, or price..."
                className="w-full pl-14 pr-6 py-5 rounded-2xl text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/95 backdrop-blur-sm shadow-xl"
              />
            </div>
          </motion.form>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Filters & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {searchQuery ? 'Search Results' : 'All Properties'}
            </h2>
            <p className="text-gray-600">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} 
              {searchQuery && <span> matching "{searchQuery}"</span>}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Toggle */}
            <div className="flex items-center bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-label="Grid view"
              >
                <Grid3x3 size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-label="List view"
              >
                <Rows3 size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid/List */}
        <AnimatePresence mode="wait">
          {filteredProperties.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No properties found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {searchQuery
                  ? `We couldn't find any properties matching "${searchQuery}"`
                  : 'Check back soon for new property listings'}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  Clear Search
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key={viewMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                  : 'space-y-4'
              }
            >
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 ${
                    viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden bg-gray-100 ${
                    viewMode === 'list' 
                      ? 'sm:w-64 h-48 sm:h-auto flex-shrink-0' 
                      : 'w-full h-64'
                  }`}>
                    {property.image_base64 ? (
                      <img
                        src={property.image_base64}
                        alt={property.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <MapPin size={32} className="text-gray-300" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      <span className="text-sm font-bold text-gray-900">{formatPrice(property.price)}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors line-clamp-1">
                      {property.name}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-gray-600 mb-4">
                      <MapPin size={16} className="text-gray-400 flex-shrink-0" />
                      <span className="text-sm line-clamp-1">{property.location}</span>
                    </div>

                    {/* Features */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      {property.beds && (
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <Bed size={16} className="text-gray-400" />
                          <span className="text-sm font-medium">{property.beds}</span>
                        </div>
                      )}
                      {property.baths && (
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <Bath size={16} className="text-gray-400" />
                          <span className="text-sm font-medium">{property.baths}</span>
                        </div>
                      )}
                      {property.sqft && (
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <Maximize2 size={16} className="text-gray-400" />
                          <span className="text-sm font-medium">{property.sqft.toLocaleString()} sqft</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ProjectsPage