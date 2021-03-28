class StaticPagesController < ApplicationController
  def index
    render 'index'
  end
  def feed
    render 'feed'
  end
  def userpage
    render 'userpage'
  end
end
