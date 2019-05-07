module Api
  class ProductsController < ApplicationController
    def index
      @products = Product.all
    end
  end
end
