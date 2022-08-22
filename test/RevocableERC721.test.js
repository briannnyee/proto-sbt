const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Revocable ERC721 (proto-SBT)', () => {
  describe('Mint', () => {
    describe('Owner', () => {
      it('Should be able to mint one', async () => {

      })

      it('Should be able to mint many', async () => {

      })
    }) 
    describe('Whitelisted', () => {
      it('Should be able to mint one', async () => {

      })

      it('Should not be able to mint more than one', async () => {

      })
    })
  })

  describe('Transferable', () => {
    describe('Owner', () => {
      it('Should not be able to transfer others\' proto-sbt', async () => {

      })

      it('Should not be able to grant permission without prior application from Soul', async () => {

      })

      it('Should be able to grant permission with prior application from Soul', async () => {
        
      })

      it('Should be able to revoke transferable permission after granted', async () => {

      })
    })
    describe('Soul', () => {
      it('Should not be able to transfer its proto-sbt without granted permission', async () => {

      })
      it('Should be able to transfer its proto-sbt once with granted permission', async () => {

      })
      it('Should not be able to transfer its proto-sbt more than once', async () => {

      })
      it('Should not be able to transfer other\'s proto-sbt', async () => {

      })
    })
    describe('Soul-less Wallet', () => {
      it('Should not be able to transfer other\' proto-sbt', async () => {
        
      })
    })
  })

  describe('Revocable', () => {
    describe('Owner', () => {
      it('Should be able to revoke (burn) proto-sbt', async () => {

      })
    })
    describe('Arbitrary Wallet', () => {
      it('Transaction should be reverted when trying to revoke proto-sbt', async () => {

      })
    })
  })
})