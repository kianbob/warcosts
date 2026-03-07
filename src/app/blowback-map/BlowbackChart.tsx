'use client'

import { useState } from 'react'

interface BlowbackNode {
  id: string
  title: string
  year: number
  type: 'intervention' | 'consequence' | 'blowback'
  description: string
  casualties?: number
  cost?: number
  connects: string[]
  region: string
}

interface BlowbackChartProps {
  nodes: BlowbackNode[]
}

export default function BlowbackChart({ nodes }: BlowbackChartProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [selectedChain, setSelectedChain] = useState<string | null>(null)

  const blowbackChains = [
    'iran',
    'afghanistan', 
    'iraq',
    'libya',
    'chile',
    'guatemala',
    'centralamerica'
  ]

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'intervention': return '#DC2626' // Red
      case 'consequence': return '#F97316' // Orange  
      case 'blowback': return '#7C2D12' // Dark red
      default: return '#6B7280' // Gray
    }
  }

  const getNodePosition = (nodeId: string, chainIndex: number, nodeIndex: number) => {
    const chainWidth = 300
    const nodeHeight = 80
    const x = 50 + (chainIndex % 3) * chainWidth
    const y = 100 + Math.floor(chainIndex / 3) * 400 + (nodeIndex * nodeHeight)
    return { x, y }
  }

  const renderChain = (chainId: string, chainIndex: number) => {
    const chainNodes = nodes.filter(node => 
      chainId === 'iran' ? node.region === 'Iran' :
      chainId === 'afghanistan' ? node.region === 'Afghanistan' :
      chainId === 'iraq' ? node.region === 'Iraq' :
      chainId === 'libya' ? node.region === 'Libya' :
      chainId === 'chile' ? node.region === 'Chile' :
      chainId === 'guatemala' ? node.region === 'Guatemala' :
      node.region === 'Central America'
    )

    return (
      <div key={chainId} className="relative">
        <h3 className="font-bold text-stone-200 text-lg mb-4 capitalize">
          {chainId} Intervention Chain
        </h3>
        <div className="space-y-3">
          {chainNodes.map((node, nodeIndex) => (
            <div key={node.id}>
              <div
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedNode === node.id 
                    ? 'border-red-400 bg-red-900/30' 
                    : 'border-stone-600 bg-slate-800/50 hover:border-red-600'
                }`}
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                style={{ borderLeftColor: getNodeColor(node.type), borderLeftWidth: '4px' }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-stone-200">{node.title}</h4>
                  <span className="text-xs text-stone-400 bg-slate-700 px-2 py-1 rounded">
                    {node.year}
                  </span>
                </div>
                <p className="text-stone-300 text-sm">{node.description}</p>
                {(node.casualties || node.cost) && (
                  <div className="flex gap-4 mt-2 text-xs text-stone-400">
                    {node.casualties && <span>Deaths: {node.casualties.toLocaleString()}</span>}
                    {node.cost && <span>Cost: ${node.cost}B</span>}
                  </div>
                )}
              </div>
              {nodeIndex < chainNodes.length - 1 && (
                <div className="flex justify-center my-2">
                  <div className="w-0.5 h-4 bg-red-600"></div>
                  <div className="absolute mt-3">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Legend */}
      <div className="bg-slate-800/50 border border-stone-700 rounded-lg p-4">
        <h3 className="font-bold text-stone-200 mb-3">Intervention Types</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-600 rounded"></div>
            <span className="text-stone-300 text-sm">US Intervention</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span className="text-stone-300 text-sm">Immediate Consequence</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-900 rounded"></div>
            <span className="text-stone-300 text-sm">Blowback/Long-term Effect</span>
          </div>
        </div>
      </div>

      {/* Interactive Chains */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blowbackChains.map((chainId, index) => renderChain(chainId, index))}
      </div>

      {/* Selected Node Details */}
      {selectedNode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" 
             onClick={() => setSelectedNode(null)}>
          <div className="bg-slate-800 border border-stone-600 rounded-lg p-6 max-w-2xl max-h-[80vh] overflow-y-auto"
               onClick={e => e.stopPropagation()}>
            {(() => {
              const node = nodes.find(n => n.id === selectedNode)
              if (!node) return null
              
              return (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-stone-200 text-xl">{node.title}</h3>
                    <button 
                      onClick={() => setSelectedNode(null)}
                      className="text-stone-400 hover:text-stone-200 text-xl"
                    >
                      ×
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-4 text-sm">
                      <span className="text-stone-400">Year:</span>
                      <span className="text-stone-300">{node.year}</span>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <span className="text-stone-400">Type:</span>
                      <span className="text-stone-300 capitalize">{node.type.replace('_', ' ')}</span>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <span className="text-stone-400">Region:</span>
                      <span className="text-stone-300">{node.region}</span>
                    </div>
                    {node.casualties && (
                      <div className="flex gap-4 text-sm">
                        <span className="text-stone-400">Deaths:</span>
                        <span className="text-red-400">{node.casualties.toLocaleString()}</span>
                      </div>
                    )}
                    {node.cost && (
                      <div className="flex gap-4 text-sm">
                        <span className="text-stone-400">Cost:</span>
                        <span className="text-red-400">${node.cost}B</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-stone-600">
                    <p className="text-stone-300 leading-relaxed">{node.description}</p>
                  </div>
                  
                  {node.connects && node.connects.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-stone-600">
                      <h4 className="font-semibold text-stone-200 mb-2">Led to:</h4>
                      <div className="space-y-2">
                        {node.connects.map(connectedId => {
                          const connectedNode = nodes.find(n => n.id === connectedId)
                          return connectedNode ? (
                            <div key={connectedId} className="text-sm">
                              <span className="text-red-400">→ {connectedNode.title} ({connectedNode.year})</span>
                            </div>
                          ) : null
                        })}
                      </div>
                    </div>
                  )}
                </>
              )
            })()}
          </div>
        </div>
      )}
    </div>
  )
}