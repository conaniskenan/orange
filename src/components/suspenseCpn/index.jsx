import React, { Suspense } from 'react'
const SuspenseCpn = Cpn => {
	return () => {
		return (
			<Suspense fallback={<div></div>}>
				<Cpn />
			</Suspense>
		)
	}
}
export default SuspenseCpn
